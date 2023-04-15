class CreatePodcasts < ActiveRecord::Migration[6.1]
  def change
    create_table :podcasts do |t|
      t.references :list, null: false, foreign_key: true
      t.string :title
      t.text :description
      t.integer :release_date
      t.text :link
      t.text :notes
      t.string :pod_uuid
      t.integer :itunes_id
      t.text :image

      t.timestamps
    end
  end
end
