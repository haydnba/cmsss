import { v4 as uuidv4 } from 'uuid'

const { $env } = window

const collections = [
  {
    label: 'Snippet',
    name: 'snippet',
    folder: $env('SNIPPET_LOCATION'),
    create: true,
    identifier_field: 'uuid',
    slug: '{{uuid}}',
    fields: [
      {
        label: 'Created',
        name: 'created',
        widget: 'datetime'
      },
      {
        label: 'Uuid',
        name: 'uuid',
        widget: 'hidden',
        default: uuidv4()
      },
      {
        label: 'Tags',
        name: 'tags',
        widget: 'list'
      },
      {
        label: 'Notes',
        name: 'notes',
        widget: 'text',
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
