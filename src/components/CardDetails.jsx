import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Typography, CardContent} from '@mui/material'
import './CardDetails.css';

function CardDetails() {
    const params = useParams()
    const [detail, setDetail] = useState(null)

    const getDetail = () => {
        fetch(`https://surprise-5-api.vercel.app/api/minibrand`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDetail(data)
        })
    }

    useEffect(() => {
        getDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (!detail) {
        return null
    }

  return (
    <>
        <Typography
                variant="h2" 
                textAlign="center"
                color="#EC0101"
                gutterBottom>
                      {detail.brandName}
                  </Typography>
    </>

  )
}

export default CardDetails