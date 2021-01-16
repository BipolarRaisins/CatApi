import React from 'react';
import axios from 'axios'
import './custom.css'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';



const styles = {
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    img: {
        width: '30%',
    },
};

class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catId: '',
            catUrl: '',
            switch: true,
            fav_id: ''
        };
    }

    componentDidMount() {
        this.getCat()
    }

    getCat = () => {
        axios.get('https://api.thecatapi.com/v1/images/search')
            .then(res => {
                this.setState({
                    catId: res.data[0].id,
                    catUrl: res.data[0].url
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    voteCat = (score) => {
        let vote = { image_id: this.state.catId, value: score }
        console.log(vote)
        axios.post('https://api.thecatapi.com/v1/votes', vote,
            {
                headers: {
                    "x-api-key": '4b75d44a-c0ee-491a-bcce-e7541e7c2489'
                }
            }
        )
            .then(res => {
                console.log(res)
                this.getCat()
            })
            .catch(error => {
                console.log(error)
            })
    }

    favCat = (event) => {
        let fav = { image_id: this.state.catId }
        axios.post('https://api.thecatapi.com/v1/favourites', fav,
            {
                headers: {
                    "x-api-key": '4b75d44a-c0ee-491a-bcce-e7541e7c2489'
                }
            }
        )
            .then(res => {
                console.log(res)
                this.setState({
                    fav_id: res.data.id,
                    switch: false
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    unFav = (event) => {
        axios.delete(`https://api.thecatapi.com/v1/favourites/${this.state.fav_id}`,
            {
                headers: {
                    "x-api-key": '4b75d44a-c0ee-491a-bcce-e7541e7c2489'
                }
            }
        )
            .then(res => {
                console.log(res)
                this.setState({
                    switch: true
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    

    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return (
            <div>
                <Card>
                    <div className="flex">
                        <CardActions>
                            <Button size="small" onClick={() => { this.voteCat(1) }}>VOTE UP</Button>
                        </CardActions>
                        <CardActions>
                            <Button size="small" onClick={() => { this.voteCat(0) }}>VOTE DOWN</Button>
                        </CardActions>
                    </div>
                    <img src={this.state.catUrl} className={classes.img} />
                    <div className="flex">
                        {this.state.switch ? (
                            <CardActions>
                                <Button size="small" onClick={this.favCat}>ADD FAVORITE</Button>
                            </CardActions>
                        ) :
                            <CardActions>
                                <Button size="small" onClick={this.unFav}>REMOVE FAVORITE</Button>
                            </CardActions>
                        }
                    </div>
                </Card>

            </div>
        )
    }
}


export default (withStyles(styles)(Vote));