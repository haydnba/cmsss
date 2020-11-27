import React from 'react'
import ReactDOM from 'react-dom'
import CMS from 'netlify-cms'

// import './index.css'
// import App from './App'
import reportWebVitals from './reportWebVitals'

class App extends React.Component {
  componentDidMount() {
    CMS.init({
      config: {
        backend: {
          name: 'github',
          repo: 'owner-name/repo-name'
        },
        collections: [
          { label: 'Blog', name: 'blog', folder: '_posts/blog', create: true, fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Publish Date', name: 'date', widget: 'datetime' },
            { label: 'Featured Image', name: 'thumbnail', widget: 'image' },
            { label: 'Body', name: 'body', widget: 'markdown' },
          ]},
        ],
        load_config_file: false,
        local_backend: true,
        media_folder: 'static/images/uploads'
      }
    })
  }

  render() {
    return (
      <div></div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
