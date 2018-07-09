// helpers

// jquery
import $ from "jquery";

/**
 * Scrolls the timeline backwards.
 */
function previous() {
  let scroll = $("#timeline").scrollLeft() - $("#col-0").width() * 2;
  $("#timeline").animate({ scrollLeft: scroll }, 500, "swing");
}

/**
 * Scrolls the timeline forward.
 */
function next() {
  let scroll = $("#timeline").scrollLeft() + $("#col-0").width() * 2;
  $("#timeline").animate({ scrollLeft: scroll }, 500, "swing");
}

export { previous, next };
