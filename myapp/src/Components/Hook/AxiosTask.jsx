import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

export default function ApiAxios() {

    const [data, setData] = useState([]);

    const handlefetch = () => {
        axios.get('https://dummyjson.com/products')
            .then((res) => {
                setData(res.data.products)
                console.log(res.data.products)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        handlefetch()
    }, [])

    return (
        <div style={{ padding: "20px" }}>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center"
                }}
            >

                {data.map((item) => (
                    <Card
                        key={item.id}
                        sx={{
                            width: 300,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}
                    >

                        <CardMedia
                            component="img"
                            height="200"
                            image={item.thumbnail}
                            alt={item.title}
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                <b>{item.title}</b>
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {item.description.substring(0, 80)}...
                            </Typography>

                            <Typography variant="subtitle2">
                                <b>Category: </b> {item.category}
                            </Typography>

                            <Typography variant="h6" color="primary">
                                ₹ {item.price}
                            </Typography>

                            <Typography variant="body2">
                                <b>Rating:</b> {item.rating}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{ justifyContent: "center" }}>
                            <Button variant="contained">
                                Buy Now
                            </Button>
                        </CardActions>

                    </Card>
                ))}

            </div>
        </div>
    )
}