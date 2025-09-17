export interface ColorScheme {
  primary: string
  secondary: string
  background: string
  text: string
}

export interface Component {
  type: string
  position?: string
  style?: string
  layout?: string
}

export interface Typography {
  headingFont: string
  bodyFont: string
  headingSize: string
  bodySize: string
}

export interface UIAnalysis {
  layout: string
  colorScheme: ColorScheme
  components: Component[]
  typography: Typography
  style: string
}