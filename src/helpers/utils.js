// helpers

// jquery
import $ from "jquery";

/**
 * Scrolls the timeline backwards.
 */
function previous() {
  let amt = $("#timeline").scrollLeft() - $("#col-0").width() * 2.5;
  $("#timeline").animate({ scrollLeft: amt }, 375, "swing");
}

/**
 * Scrolls the timeline forward.
 */
function next() {
  let amt = $("#timeline").scrollLeft() + $("#col-0").width() * 2.5;

  $("#timeline").animate({ scrollLeft: amt }, 375, "swing");
}

export { previous, next };
