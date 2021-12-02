class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize
    skip_before_action :authorize, only: [:create, :index]

    # POST /signup
    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # GET /users
    def index 
        users = User.all
        render json: users 
    end

    # GET /me
    def show
        user = User.find(session[:user_id])
        render json: user
    end

    private

    def authorize
        return render json: { error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :bio, :profile_pic)
    end

    def render_not_found_response
        render json: { error: "recipe not found" }, status: :not_found
      end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
