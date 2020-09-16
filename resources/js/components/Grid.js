import React from 'react'
import { Link } from 'react-router-dom'
import Masonry from 'masonry-layout'

export default class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        }

        this.Masonry = null
    }

    updateItems(newItems) {
        this.setState({ items: newItems }, () => {
            this.destroyMasonry()

            this.Masonry = new Masonry(document.querySelector('.grid'), {
                itemSelector: '.grid-item',
                percentPosition: true
            });
        })
    }

    destroyMasonry() {
        if (this.Masonry) {
            this.Masonry.destroy()
        }
    }

    componentWillUnmount() {
       this.destroyMasonry()
    }

    render() {
        return (
            <div class="grid m-auto">
                {this.state.items.map((project, index) => {
                    return <div className={ `grid-item item-width-${project.width}` } key={ index }>
                        <div class="grid-item-body">
                        <img class="img-fluid" src={ project.image } />
                        <div class="content">
                            <h3>
                                { project.title }
                            </h3>

                            <p>
                                { project.description }
                            </p>

                            <Link to={ project.url }>Full Project</Link>
                        </div>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
