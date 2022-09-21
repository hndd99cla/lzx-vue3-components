<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: lzx
 * @Date: 2022-09-21 00:23:05
-->
# Button

### Basic Use
```html
<b-button>start</b-button>
```

```vue
import BasicUse from '../example/BasicUse'
```

### Theme Color Button
```html
<b-button color="#009688">start</b-button>
```

```vue
import ModifyColor from '../example/ModifyColor'
```

## API

### Props

| Prop  | Description | Type | Default |
| --- | --- | --- | --- | 
| `color` | 按钮颜色 | _string_ | `default` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when the button is clicked | `event: Event` |

### Slots

| Slot      | Description | Arguments |
|-----------| --- | --- |
| `default` | Button content | `-` |