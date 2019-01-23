export interface ISettingTestComponentProps {

  /**
   * Login user
   *
   * @memberof ISettingTestComponentProps
   */
  login?: (email: string, password: string) => any

  /**
   * Redirect to home page
   *
   * @memberof ISettingTestComponentProps
   */
  homePage?: () => void

  /**
   * Styles
   */
  classes?: any

  /**
   * Translate to locale string
   */
  translate?: (state: any, param?: {}) => any

}
