

<form method="POST" action="/quizzes/<%= quiz.id %>/tips/<%= tip.id %>?_method=PUT" >
                                                  
    <div class="wideRow">

        <span class="itemNarrow">New Tip:</span>

    <input type="text" class="itemWide" id="tip" name="text" value="<%= tip.text %>" placeholder="Tip" autocomplete="off" />

    <button type="submit" class="itemNarrow">Edit</button>
    </div>

</form>