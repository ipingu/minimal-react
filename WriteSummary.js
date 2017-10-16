import React from 'react';

class WriteSummary extends React.Component {
   render() {
      return (
        <article class="checkpoint">
          <h2>Where are you ?</h2>
          <form>
            <input type="text" placeholder="Location" />
            <br />
            <textarea></textarea>
            <br />
            <input type="file" accept="image/*" capture="camera" />
            <br />
            <button id="postStory">Publish</button>
          </form>
        </article>
      );
   }
}
export default WriteSummary;
