# # app/controllers/api/v1/users_controller.rb

# module Api
#   module V1
#     class UsersController < ApplicationController
#       # before_action :authenticate_user!

#       def create
#         user = User.new(user_params)
#         if user.save
#           render json: user
#         else
#           render json: { error: 'Unable to sign up' }, status: 400
#         end
#       end

#       private

#       def user_params
#         params.require(:user).permit(:email, :password)
#       end
#     end
#   end
# end
