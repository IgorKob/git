import * as $ from 'jquery'
import Post from '@models/post.js'
import json from './assets/json.json'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import logoimg from '@/assets/logo.png'
import './babel.js'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'


const post = new Post('Webpack Post Title', logoimg)

// $('pre').html(post.toString())
$('pre').addClass('code').html(post.toString())


//console.log('Post to String:', post.toString())

// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', csv)
