class AddColumnsToPodcasts < ActiveRecord::Migration[6.1]
  def change
    add_column :podcasts, :language, :string
    add_column :podcasts, :authorName, :string
    add_column :podcasts, :isCompleted, :boolean
    add_column :podcasts, :totalEpisodeCount, :int
    add_column :podcasts, :rssUrl, :string
  end
end
