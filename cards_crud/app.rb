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

post '/api/cards/:id' do
  content_type :json
  card = Card.create(params[:card])
  card.to_json
end

get '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.to_json
end

put '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i).update(params[:card])
  card.to_json
end

patch '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i).update(params[:card])
  card.to_json
end

delete '/api/cards/:id' do
  content_type :json
  id = params[:id].to_i
  card = Card.destroy(id)
end
