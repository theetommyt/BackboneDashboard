require 'bundler'
Bundler.require()

ActiveRecord::Base.establish_connection(
adapter:  'postgresql',
database: 'all_the_cards'

)

get '/' do
  erb :index
end

get '/variables' do
  erb :variables
end

#Helper
def card_parameters
  request_body = JSON.parse(request.body.read.to_s)
  { title: request_body["title"], message: request_body["message"] }
end

post '/api/cards' do
  card = Card.create(card_parameters)
  card.to_json
end

patch '/api/cards/:id' do
  card = Card.find(params[:id].to_i)
  card.update(card_parameters())

  content_type(:json)
  card.to_json
end

put '/api/cards/:id' do
  card = Card.find(params[:id].to_i)
  card.update(card_parameters())

  content_type(:json)
  card.to_json
end
