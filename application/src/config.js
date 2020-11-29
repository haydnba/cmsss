const collections = [
  {
    label: 'Snippet',
    name: 'snippet',
    folder: window.$env('SNIPPET_LOCATION'),
    create: true,
    fields: [
      {
        label: 'Title',
        name: 'title',
        widget: 'string'
      },
      {
        label: 'Created',
        name: 'created',
        widget: 'datetime'
      },
      {
        label: 'Updated',
        name: 'updated',
        widget: 'datetime'
      },
      {
        label: 'Code',
        name: 'code',
        widget: 'code'
      }
    ]
  }
]

const config = {
  cms: {
    backend: {
      name: 'test-repo'
    },
    collections,
    load_config_file: false,
    local_backend: true,
    media_folder: 'static/images/uploads'
  }
}

export default config
