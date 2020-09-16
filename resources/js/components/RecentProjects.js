import React from 'react'
import Grid from './Grid'

export default class RecentProjects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    title: 'Make Ideas Happen',
                    description: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
                    url: '',
                    image: '/images/recent-projects/whellies01.png',
                    width: 1,
                    categories: ['Branding']
                },
                {
                    title: 'Make Ideas Happen',
                    description: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
                    url: '',
                    image: '/images/recent-projects/newspaper02.png',
                    width: 1,
                    categories: ['Web Design', 'Digital Marketing']
                },
                {
                    title: 'Make Ideas Happen',
                    description: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
                    url: '',
                    image: '/images/recent-projects/makerek.png',
                    width: 1,
                    categories: ['Branding', 'Web Design']
                },
                {
                    title: 'Make Ideas Happen',
                    description: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
                    url: '',
                    image: '/images/recent-projects/newspaper.png',
                    width: 2,
                    categories: ['Web Design']
                },
                {
                    title: 'Make Ideas Happen',
                    description: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
                    url: '',
                    image: '/images/recent-projects/rider01.png',
                    width: 1,
                    categories: ['Digital Marketing']
                }
            ],

            categories: ['Branding', 'Web Design', 'Digital Marketing']
        }
    }

    componentDidMount() {
        this.selectCategory('all');
    }

    updateFilteredProjects(projects) {
        this.grid.updateItems(projects)
    }

    selectCategory(selectedCategory) {
        if (selectedCategory === 'all') {
            return this.updateFilteredProjects(this.state.projects)
        }

        const projects = this.state.projects.filter(
            project => project.categories.includes(selectedCategory)   
        )

        return this.updateFilteredProjects(projects)
    }

    render() {
        return (
            <div class="container">
                <h1 class="mb-5">
                    Some of our <br />
                    <span>recent projects</span>
                </h1>

                <div class="row">
                    <div class="col-12">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <a class="btn border-bottom" onClick={() => this.selectCategory('all')}>All</a>

                            {this.state.categories.map((category, index) => {
                                return <a class="btn border-bottom" key={ index } onClick={() => this.selectCategory(category)}>{ category }
                                </a>
                            })}
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <Grid ref={c => (this.grid = c)} />
                    </div>
                </div>
            </div>
        )
    }
}
