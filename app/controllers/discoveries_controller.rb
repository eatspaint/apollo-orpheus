class DiscoveriesController < ApplicationController
  def index
  end

  def generate
    artists = params[:artists]
    ids = artists.map {|artist| RSpotify::Artist.search(artist)[0].try(:id)}
    tracks = RSpotify::Recommendations.generate(limit: params[:limit], seed_artists: ids.compact).tracks
    render json: { tracks: tracks }
  end
end
