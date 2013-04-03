
require 'bundler/setup'
require 'rubygems'  
require 'sinatra' 
require 'erb'

get '/' do
  erb :layout
end