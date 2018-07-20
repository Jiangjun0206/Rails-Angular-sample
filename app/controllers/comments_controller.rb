class CommentsController < ApplicationController
	before_action :set_post

	def new
		@post.comments.create! comments.params
		redirect_to @post
	end
	def create
		@post.comments.create! comments.params
		redirect_to @post
	end

	private
		def set_post
			@post = Post.find(params[:post_id])
		end

		def comments_params
			params.required(:comment).permit(:body)
		end
end
