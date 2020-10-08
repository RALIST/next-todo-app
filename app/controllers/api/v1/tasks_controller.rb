class Api::V1::TasksController < Api::V1::ApiController

  def index
    tasks = Task.all.order(created_at: :desc)
    render json: tasks, status: :ok
  end

  def create
    new_task = Task.create!(task_params)
    render json: new_task, status: :created
  end

  def update
    task.update!(task_params)
    render json: task, status: :ok
  end

  def destroy
    task.destroy!
    head :ok
  end

  private

  def task
    @task ||= Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:name, :done, :important)
  end
end
