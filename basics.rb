require 'bundler/setup'
require 'rubygems'  
require 'sinatra' 
require 'erb'
require 'active_support/time' 

get '/' do
  erb :layout
end