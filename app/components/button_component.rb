class ButtonComponent < ViewComponent::Base
  def initialize(text: "", icon: nil, icon_type: :outline, **options)
    @text = text
    @icon = icon
    @icon_type = icon_type
    @options = options
  end

  private

  attr_reader :text, :icon, :icon_type, :options

  def button_classes
    base_classes = "inline-flex items-center text-sm font-medium border border-gray-300 duration-150 cursor-pointer"

    custom_classes = options.delete(:class) || ""
    "#{base_classes} #{custom_classes}".strip
  end

  def button_attributes
    options.map { |k, v|
      if v.is_a?(TrueClass)
        k.to_s.dasherize
      elsif v.is_a?(FalseClass)
        nil
      else
        "#{k.to_s.dasherize}=\"#{v}\""
      end
    }.compact.join(' ')
  end
end
