import * as $ from 'jquery'
import Post from '@models/post.js'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import logoimg from '@/assets/logo.png'
import React from 'react'
import {render} from 'react-dom'
import './babel.js'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'


const post = new Post('Webpack Post Title', logoimg)
$('pre').addClass('code').html(post.toString())

const App = () => (
  <div className='container'>
    <h1>Webpack kim</h1>
    <hr />
    <div className='logo' />
    <hr />
    <pre />
    <hr />
    <div className='box'>
      <h2>Less</h2>
    </div>
    <div className='card'>
      <h2>Scss</h2>
    </div>
  </div>
)

render(<App/>, document.getElementById('app'))
