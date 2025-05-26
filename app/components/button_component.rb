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
    base_classes = "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150"

    if text.blank? && icon.present?
      base_classes = "inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors duration-150"
    end

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
