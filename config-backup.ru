use Rack::Static,
  :urls => ["/fonts", "/js", "/css"],
  :root => "public"

static_page_mappings = {
  '/'             => 'public/index.html',
  '/page2.html' => 'public/page2.html'
}

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY),
    File.open('public/page2.html', File::RDONLY)
  ]
}
