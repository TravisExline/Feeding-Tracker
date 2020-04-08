class ReptilesController < ApplicationController
  before_action :set_reptile, only: [:show, :update, :destroy]

  # GET /reptiles
  def index
    @reptiles = Reptile.all

    render json: @reptiles
  end

  # GET /reptiles/1
  def show
    render json: @reptile
  end

  # POST /reptiles
  def create
    @reptile = Reptile.new(reptile_params)

    if @reptile.save
      render json: @reptile, status: :created, location: @reptile
    else
      render json: @reptile.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reptiles/1
  def update
    if @reptile.update(reptile_params)
      render json: @reptile
    else
      render json: @reptile.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reptiles/1
  def destroy
    @reptile.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reptile
      @reptile = Reptile.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def reptile_params
      params.require(:reptile).permit(:name, :age, :species, :user_id)
    end
end
