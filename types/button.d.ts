/*
 * @Description: 
 * @Version: 0.1
 * @Autor: lzx
 * @Date: 2022-09-21 00:23:05
 */
import { BasicComponent } from './basicComponent'

export interface ButtonProps {
  color?: string
  onClick?: (e: Event) => void,
  type?: 'primary' | 'danger' | 'info'
}

export class Button extends BasicComponent {
  $props: ButtonProps
}

export class _ButtonComponent extends Button {}
