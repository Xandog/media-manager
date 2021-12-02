class MediaController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    wrap_parameters false
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    # GET /media
    def index
        media = Medium.all
        render json: media
    end

    # GET /media/:id
    def show
        medium = find_medium
        render json: medium
    end

    # POST /media
    def create
        medium = Medium.create!(medium_params)
        render json: medium, status: :created
    end

    # PATCH /media/:id
    def update
        medium = find_medium
        medium.update(medium_params)
        render json: medium
    end

    # DELETE /media/:id
    def destroy
        medium = find_medium
        medium.destroy
        head :no_content
    end

    private

    def find_medium
        Medium.find(params[:id])
    end

    def medium_params
        params.permit(:list_id, :title, :studio, :medium_type, :image)
    end

    def render_not_found_response
        render json: { error: "medium not found" }, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
