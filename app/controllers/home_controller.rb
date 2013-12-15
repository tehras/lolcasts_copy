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

  def query_find
    @casts = Cast.all
    if params["choice"] == 'all' then
      @cast_query = Cast.includes(:votes).order("cached_votes_score").reverse_order.first(15)
    elsif params['choice'] == 'last7days' then
      @cast_query = @casts.where(created_at: (Time.now - 7.day)..(Time.now)).includes(:votes).order("cached_votes_score").reverse_order.first(15)
    elsif params['choice'] == 'last30days' then
      @cast_query = @casts.where(created_at: (Time.now - 30.day)..(Time.now)).includes(:votes).order("cached_votes_score").reverse_order.first(15)
    end

    if params["lastCount"] != 0 && params["lastCount"] != nil then
      if params["dataType"] == 'all' then
        @cast_query = Cast.includes(:votes).order("cached_votes_score").reverse_order[params["lastCount"].to_i..params["lastCount"].to_i+14]
      elsif params['dataType'] == '7' then
        @cast_query = @casts.where(created_at: (Time.now - 7.day)..(Time.now)).includes(:votes).order("cached_votes_score").reverse_order[params["lastCount"].to_i..params["lastCount"].to_i+14]
      elsif params['dataType'] == '30' then
        @cast_query = @casts.where(created_at: (Time.now - 30.day)..(Time.now)).includes(:votes).order("cached_votes_score").reverse_order[params["lastCount"].to_i..params["lastCount"].to_i+14]
      end
    end

    if @cast_query == nil then
      respond_to do |format|
        format.html {}
      end
    else
      respond_to do |format|
        format.html { render :partial => 'home/query' }
      end
    end
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

