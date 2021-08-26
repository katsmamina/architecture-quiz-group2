<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TREE -->

![dependency graph](../client/dependency-graph.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- assets
- src
  - business-logic
    - [add-number.js](#clientsrcbusiness-logicadd-numberjs)
    - [get-sorted.js](#clientsrcbusiness-logicget-sortedjs)
    - [get.js](#clientsrcbusiness-logicgetjs)
    - [initialize-state.js](#clientsrcbusiness-logicinitialize-statejs)
    - [set.js](#clientsrcbusiness-logicsetjs)
  - presentation
    - components
      - [list.js](#clientsrcpresentationcomponentslistjs)
      - [number-input.js](#clientsrcpresentationcomponentsnumber-inputjs)
    - custom-events
      - [add-number.js](#clientsrcpresentationcustom-eventsadd-numberjs)
    - handlers
      - [add-number.js](#clientsrcpresentationhandlersadd-numberjs)
      - [initialize-app.js](#clientsrcpresentationhandlersinitialize-appjs)
    - init
      - [index.js](#clientsrcpresentationinitindexjs)
    - listeners
      - [add-number.js](#clientsrcpresentationlistenersadd-numberjs)
      - [load.js](#clientsrcpresentationlistenersloadjs)
  - utils
    - [sort-numbers.js](#clientsrcutilssort-numbersjs)
- styles

---

<!-- END TOC -->

<!-- BEGIN DOCS -->

# /assets

---

# /src

## /business-logic

<details><summary><a href="../../client/src/business-logic/add-number.js" id="clientsrcbusiness-logicadd-numberjs">../client/src/business-logic/add-number.js</a></summary>

</details>

<details><summary><a href="../../client/src/business-logic/get-sorted.js" id="clientsrcbusiness-logicget-sortedjs">../client/src/business-logic/get-sorted.js</a></summary>

</details>

<details><summary><a href="../../client/src/business-logic/get.js" id="clientsrcbusiness-logicgetjs">../client/src/business-logic/get.js</a></summary>

</details>

<details><summary><a href="../../client/src/business-logic/initialize-state.js" id="clientsrcbusiness-logicinitialize-statejs">../client/src/business-logic/initialize-state.js</a></summary>

</details>

<details><summary><a href="../../client/src/business-logic/set.js" id="clientsrcbusiness-logicsetjs">../client/src/business-logic/set.js</a></summary>

</details>

---

## /presentation

### /components

<details><summary><a href="../../client/src/presentation/components/list.js" id="clientsrcpresentationcomponentslistjs">../client/src/presentation/components/list.js</a></summary>

</details>

<details><summary><a href="../../client/src/presentation/components/number-input.js" id="clientsrcpresentationcomponentsnumber-inputjs">../client/src/presentation/components/number-input.js</a></summary>

<a name="numberInputComponent"></a>

## numberInputComponent ⇒ <code>HTMLInputElement</code>

Returns a number input with your initial value set.

**Returns**: <code>HTMLInputElement</code> - - The rendered input element.  
**Emits**: <code>CustomEvent#event:addNumber</code>

| Param        | Type                | Description                       |
| ------------ | ------------------- | --------------------------------- |
| initialValue | <code>number</code> | The initial value for this input. |

</details>

---

### /custom-events

<details><summary><a href="../../client/src/presentation/custom-events/add-number.js" id="clientsrcpresentationcustom-eventsadd-numberjs">../client/src/presentation/custom-events/add-number.js</a></summary>

<a name="addNumberEvent"></a>

## addNumberEvent ⇒ <code>CustomEvent#addNumber</code>

Returns a new `addNumber` event containing the number to add.

**Returns**: <code>CustomEvent#addNumber</code> - - An `addNumber` event with your number.

| Param     | Type                | Description        |
| --------- | ------------------- | ------------------ |
| newNumber | <code>number</code> | The number to add. |

</details>

---

### /handlers

<details><summary><a href="../../client/src/presentation/handlers/add-number.js" id="clientsrcpresentationhandlersadd-numberjs">../client/src/presentation/handlers/add-number.js</a></summary>

</details>

<details><summary><a href="../../client/src/presentation/handlers/initialize-app.js" id="clientsrcpresentationhandlersinitialize-appjs">../client/src/presentation/handlers/initialize-app.js</a></summary>

</details>

---

### /init

<details><summary><a href="../../client/src/presentation/init/index.js" id="clientsrcpresentationinitindexjs">../client/src/presentation/init/index.js</a></summary>

</details>

---

### /listeners

<details><summary><a href="../../client/src/presentation/listeners/add-number.js" id="clientsrcpresentationlistenersadd-numberjs">../client/src/presentation/listeners/add-number.js</a></summary>

</details>

<details><summary><a href="../../client/src/presentation/listeners/load.js" id="clientsrcpresentationlistenersloadjs">../client/src/presentation/listeners/load.js</a></summary>

</details>

---

---

## /utils

<details><summary><a href="../../client/src/utils/sort-numbers.js" id="clientsrcutilssort-numbersjs">../client/src/utils/sort-numbers.js</a></summary>

<a name="sortNumbers"></a>

## sortNumbers ⇒ <code>Array.&lt;number&gt;</code>

Sorts an array of numbers from smallest to largest.

Returns a new array without modifying the original array.

Does not need to support: NaN, Infinity, -Infinity.

**Returns**: <code>Array.&lt;number&gt;</code> - A new array with the same numbers, but sorted.

| Param          | Type                              | Default         | Description                   |
| -------------- | --------------------------------- | --------------- | ----------------------------- |
| [arrOfNumbers] | <code>Array.&lt;number&gt;</code> | <code>[]</code> | The array of numbers to sort. |

**Example**

```js
sortNumbers([1.5, 1, -1.5, 0, -1]);
// -> [-1.5, -1, 0, 1, 1.5]
```

**Example**

```js
sortNumbers([-1, 0, 1]);
// -> [-1, 0, 1]
```

</details>

---

---

# /styles

---

<!-- END DOCS -->
