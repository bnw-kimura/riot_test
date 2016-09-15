<account>
  <subscription  plan={ opts.plan } show_details="true" />
  <test></test>
</account>


<subscription>
  <p>{ opts.plan.name }</h3>

  // Get JS handle to options
  var plan = opts.plan,
      show_details = opts.show_details

  // access to the parent tag
  var parent = this.parent

  <style type="stylus">
    p{
      margin: 20px;
    }
  </style>
</subscription>

<test>
  <h3>h3 タイトル
    <span> { hensu_ || 'if文'}</span>
  </h3>


  <!-- scoped をつけると指定したtag内のみ有効になる -->
  <!-- stylusで記述可能 -->
  <style scoped type="stylus">
    :scope{
      display: block;
      margin: 20px;
      border: 1px solid #000;
    }

    h3{
      margin: 10px;
      font-size: 14px;
      font-weight: bold;

      span{
        display block
        padding 10px
        color #999
      }
    }
  </style>


  <script>
    <!-- ES5で書いてもbabelでちゃんと変換されている -->
    const a = 'hensu';

    setTimeout(() =>{
      console.log(a);
    }, 3000);
  </script>
</test>
