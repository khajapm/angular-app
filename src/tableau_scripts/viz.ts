declare var tableau: any;

export function initViz (url:string): void {
    var viz, 
    //tableau,
    containerDiv = document.getElementById("vizContainer"),
    options = {
        "Academic Year": "",
        hideTabs: true,
        onFirstInteractive: function () {
            listenToMarksSelection();
        }
    };
    viz = new tableau.Viz(containerDiv, url, options);

    function listenToMarksSelection() {
        viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, onMarksSelection);
    }

    function onMarksSelection(marksEvent) {
        return marksEvent.getMarksAsync().then(reportSelectedMarks);
    }

    function reportSelectedMarks(marks) {
        var html = ""; 
        
        for (var markIndex = 0; markIndex < marks.length; markIndex++) {
            var pairs = marks[markIndex].getPairs();
            html += "<b>Mark " + markIndex + ":</b><ul>";

            for (var pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
                var pair = pairs[pairIndex];
                html += "<li><b>Field Name:</b> " + pair.fieldName;
                html += "<br/><b>Value:</b> " + pair.formattedValue + "</li>";
            }

            html += "</ul>";
        }

        var infoDiv = document.getElementById('markDetails');
        infoDiv.innerHTML = html;
    }
}
