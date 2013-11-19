class HomeController < ApplicationController
  def index
    @casts = Cast.all
  end

  def top
    @casts = Cast.all
    @votes = Vote.all
  end

end

