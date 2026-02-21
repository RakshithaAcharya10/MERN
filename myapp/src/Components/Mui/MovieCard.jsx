import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import avatarImage from '../../assets/Avatar.png'
import Batman from '../../assets/Batman.png'
import Titanic from '../../assets/Titanic.png'
import Spiderman from '../../assets/Spiderman.png'


export default function MovieCard() {

    const movies = [
{
    moviename: 'AVATAR',
    image: avatarImage,
    description: 'Avatar is a science fiction movie directed by James Cameron. It shows the story of Pandora, a beautiful alien world. The movie focuses on the conflict between humans and Na\'vi people. It is famous for its visual effects and amazing graphics.',
    rating: '8.5 / 10'
},
{
    moviename: 'BATMAN',
    image: Batman,
    description: 'Batman is a superhero movie based on the DC Comics character Bruce Wayne. It shows the story of Gotham city, which is full of crime and corruption. Batman fights criminals using his intelligence, strength, and technology. The movie is famous for its dark theme, action scenes, and powerful character development.',
    rating: '8.3 / 10'
},
{
    moviename: 'TITANIC',
    image: Titanic,
    description: 'Titanic is a romantic and disaster movie directed by James Cameron. It tells the story of Jack and Rose, who fall in love on the Titanic ship. The movie shows the tragic sinking of the ship in the ocean. It is famous for its emotional story, beautiful scenes, and historical importance.',
    rating: '7.9 / 10'
},
{
    moviename: 'SPIDERMAN',
    image: Spiderman,
    description: 'Spiderman is a superhero movie based on Marvel Comics character Peter Parker. It shows the story of a young boy who gets spider powers after a bite. He uses his powers to protect people and fight villains. The movie is famous for its action scenes, emotional moments, and inspiring hero journey.',
    rating: '8.5 / 10'
}
];


    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, margin: 20 }}>

            {movies.map((movie, index) => (

                <Card key={index} style={{ maxWidth: 345, textAlign:"justify" }}>

                    <CardMedia
                        style={{ height: 200 }}
                        image={movie.image}
                        title={movie.moviename}
                    />

                    <CardContent>

                        <Typography variant="h5" style={{ fontWeight: "bold", color: "#1a5ea1" }}>
                            {movie.moviename}
                        </Typography>

                        <Typography variant="body2">
                            {movie.description}
                        </Typography>

                        <Typography variant="h6" style={{ marginTop: 10, color: 'green' }}>
                            Rating: {movie.rating}
                        </Typography>

                    </CardContent>

                    <CardActions>
                        <Button variant='contained'>Know More</Button>
                    </CardActions>

                </Card>

            ))}

        </div>
    )

}



