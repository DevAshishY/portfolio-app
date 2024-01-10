import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
{
id : 1,
image: IMG1,
title : 'mi-store-clone-react',
github: 'https://github.com/DevAshishY/mi-store-clone-react',
demo: 'https://devashishy.github.io/mi-store-clone-react/'
},
{
id : 1,
image: IMG2,
title : 'myntra-clone',
github: 'https://github.com/DevAshishY/myntra-clone',
demo: 'https://devashishy.github.io/myntra-clone/'
},
{
id : 1,
image: IMG3,
title : 'react-calculator',
github: 'https://github.com/DevAshishY/react-calculator',
demo: 'https://devashishy.github.io/react-calculator/'
},
{
id : 1,
image: IMG4,
title : 'social-media-clone',
github: 'https://github.com/DevAshishY/social-media-clone',
demo: 'https://devashishy.github.io/social-media-clone/'
},
{
id : 1,
image: IMG5,
title : 'todo-with-context-reducer',
github: 'https://github.com/DevAshishY/todo-with-context-reducer',
demo: 'https://devashishy.github.io/todo-with-context-reducer/'
},

]


const Portfolio = () => {
  return (
   <section id='portfolio'>
<h5> My Recent Work</h5>
<h2>portfolio</h2>
<div className='container portfolio_container'>
{
data.map(({id,image,title,github,demo})=>{
  return(
    <article key={id} className='portfolio_item'>
<div className='portfolio_item-image'>
  <img src={image} alt={title} ></img>
</div>
<h3>{ title}</h3>
<div className='portfolio_item-cta'>
<a href={github} className='btn' target='_blank'>Github</a>
<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article>
  )
})
}
</div>
   </section>
  )
}

export default Portfolio