class ListsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    wrap_parameters false
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    # GET /lists
    def index
        lists = List.all
        render json: lists
    end

    # GET /lists/:id
    def show
        list = find_list
        render json: list
    end

    # POST /lists
    def create
        list = List.create!(list_params)
        render json: list, status: :created
    end

    # PATCH /lists/:id
    def update
        list = find_list
        list.update(list_params)
        render json: list
    end

    # DELETE /lists/:id
    def destroy
        list = find_list
        list.destroy
        head :no_content
    end

    private

    def find_list
        List.find(params[:id])
    end

    def list_params
        params.permit(:user_id, :title, :list_type)
    end

    def render_not_found_response
        render json: { error: "list not found" }, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end


# PATCH /list/:id/like
    #   def increment_likes
    #     list = find_list
    #     list.update(likes: list.likes + 1)
    #     render json: list
    #   end