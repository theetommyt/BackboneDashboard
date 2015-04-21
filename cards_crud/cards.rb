class Card < ActiveRecord::Base
  @title = title
  @message = message

  def title
    @title
  end

  def message
    @message
  end

  def title=(new_title)
    @title = new_title
  end

  def message=(new_message)
    @message = new_message
  end

  def to_s
    self.name
  end

end
