import axios from 'axios'
import React, { Component } from 'react'

export default class News extends Component {

    state = {
        allData: []
    }
    getNew = async () => {
        let { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dd3bcc2ed0c64bc4b47a520bd5a7460e')
        console.log(data)
        let  article  = data.articles;
        console.log(article)
        this.setState({ allData: article })
        console.log(this.state.allData)
    }
    componentDidMount() {
        this.getNew()
    }
   
     
    render() {
        return (
            <>
            
                <div className="container">
                    <div className="row">
                        {  
                            ((this.state.allData || []).length !== 0) ?( this.state.allData.map((article) => {
                                <div className="col-md-4">
                                    <img src={article.urlToImage} />
                                    <h1>{article.title}</h1>
                                    <p>{article.description}</p>
                                </div>
                            }))
                            : <h1>Loading .....</h1>
                        }
                    </div>
                </div>
            </>
        )
    }


}
