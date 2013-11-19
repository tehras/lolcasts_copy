class CastsController < ApplicationController
  before_action :set_cast, only: [:show, :edit, :update, :destroy]

  def vote
    msg = params["Cast"]
    @cast = Cast.find(msg["id"])
    @cast.vote :voter => current_user, :vote => msg["vote"]


    votevalue = @cast.upvotes.size - @cast.downvotes.size

    respond_to do |format|
      format.html
      format.json { render :json => votevalue}
    end

    #temp = params["Cast"]
    #cast = Cast.find(temp["id"])
    #user = current_user
    #
    #
    #cast.update_vote(temp["vote"],temp["id"])
    #
    #vote = Vote.new
    #vote.user_id = user.id
    #vote.cast_id = cast.id
    #vote.save
    #
    #respond_to do |format|
    #  format.html {head :no_content}
    #  format.json {head :no_content}
    #end
  end

  # GET /casts
  # GET /casts.json
  def index
    @casts = Cast.all
  end

  # GET /casts/1
  # GET /casts/1.json
  def show
  end

  # GET /casts/new
  def new
    @cast = Cast.new
  end

  # GET /casts/1/edit
  def edit
  end

  # POST /casts
  # POST /casts.json
  def create
    @cast = Cast.new(cast_params)

    respond_to do |format|
      if @cast.save
        format.html { redirect_to @cast, notice: 'Cast was successfully created.' }
        format.json { render action: 'show', status: :created, location: @cast }
      else
        format.html { render action: 'new' }
        format.json { render json: @cast.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /casts/1
  # PATCH/PUT /casts/1.json
  def update
    respond_to do |format|
      if @cast.update(cast_params)
        format.html { redirect_to @cast, notice: 'Cast was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @cast.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /casts/1
  # DELETE /casts/1.json
  def destroy
    @cast.destroy
    respond_to do |format|
      format.html { redirect_to casts_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cast
      @cast = Cast.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def cast_params
      params.require(:cast).permit(:match_type, :red_team, :blue_team, :best_of, :tournament_name, :caster, :link, :link2, :upvote, :downvote, :count)
      end
  end
