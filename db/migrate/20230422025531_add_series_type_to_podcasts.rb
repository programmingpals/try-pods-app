class AddSeriesTypeToPodcasts < ActiveRecord::Migration[6.1]
  def change
    add_column :podcasts, :seriesType, :string
  end
end
