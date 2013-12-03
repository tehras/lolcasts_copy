class HomeController < ApplicationController
  def index
    @casts = Cast.all
    @twitch = Twitch.new({
       :client_id => @client_id,
       :secret_key => @secret_key,
       :redirect_uri => @redirect_uri,
       :scope => @scope
   })
  end

  def stream
    @stream = params[:stream]
  end

  def top
    @casts = Cast.all
    @votes = Vote.all
    @twitch = Twitch.new({
         :client_id => @client_id,
         :secret_key => @secret_key,
         :redirect_uri => @redirect_uri,
         :scope => @scope
     })
  end

  def all_streams
    @twitch = Twitch.new({
         :client_id => @client_id,
         :secret_key => @secret_key,
         :redirect_uri => @redirect_uri,
         :scope => @scope
     })
  end

end

