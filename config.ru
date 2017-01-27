use Rack::Static,
  :urls => ["/fonts", "/js", "/css"],
  :root => "public"

static_page_mappings = {
  '/'             => 'public/index.html',
  '/page2.html' => 'public/page2.html'
}

static_page_mappings.each do |req, file|
  map req do 
    run Proc.new { |env|
      [
        200, 
        {
          'Content-Type'  => 'text/html', 
          'Cache-Control' => 'public, max-age=6400',
        },
        File.open(file, File::RDONLY)
      ]
    }
  end
end
