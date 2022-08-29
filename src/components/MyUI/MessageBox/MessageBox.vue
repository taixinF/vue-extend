<template>
  <div>
    <div :class="['message-box', type]">
      <div class="inner">
        <header class="header">
          <h1 class="title">{{ title }}</h1>
          <span class="close-btn" @click="$messageBox.hide()">X</span>
        </header>
        <div class="content">{{ content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props: {
    title: {
      type: String,
      default: "This is TITLE",
    },
    content: {
      type: String,
      default: "This is CONTENT",
    },
    type: {
      type: String,
      default: "success",
      validator: function (value) {
        return ["primary", "success", "warn", "danger"].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}

h1 {
  margin: 0;
  font-weight: normal;
}

.message-box {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .inner {
    position: absolute;
    top: 100px;
    left: 50%;
    width: 500px;
    margin-left: -250px;
    background-color: #fff;
    box-shadow: 1px 3px 5px #ededed;
    border-radius: 5px;
    overflow: hidden;

    .header {
      height: 44px;
      padding: 0 10px;
      line-height: 44px;
      box-sizing: border-box;

      .title {
        font-size: 16px;
        float: left;
      }

      .close-btn {
        float: right;
        cursor: pointer;
      }
    }

    .content {
      padding: 20px;
      box-sizing: border-box;
    }
  }

  &.primary {
    .header {
      background-color: blue;
      color: purple;
    }
  }

  &.success {
    .header {
      background-color: green;
      color: #f0f0f0;
    }
  }

  &.warn {
    .header {
      background-color: orange;
      color: #333;
    }
  }

  &.danger {
    .header {
      background-color: red;
      color: #000;
    }
  }
}
</style>
