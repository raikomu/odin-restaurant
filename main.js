(()=>{"use strict";const e=function(){const e=document.getElementById("container"),t=document.createElement("img"),n=document.createElement("section"),d=document.createElement("p");t.src="alley.jpg",t.setAttribute("id","alley"),n.setAttribute("id","copy"),d.innerHTML="We take care of all your dead, from drunken tavern accidents to old age. Our top of the line, Chill Touch powered freezers will keep your remains in top-notch condition! We accommodate all sizes, from gnomes to ogres.",n.appendChild(d),e.appendChild(n),e.appendChild(t)};function t(e,t){const n=document.createElement("tr");for(let d=0;d<t.length;d++){const c=document.createElement("td");let i=t[d];c.innerHTML=i,n.appendChild(c),e.appendChild(n)}}function n(e,t,n){const d=document.createElement("div"),c=document.createElement("img"),i=document.createElement("address");return c.src=`${e}.png`,i.innerHTML=`${t}<br>${n}`,d.appendChild(c),d.appendChild(i),d}(function(){const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("div"),d=document.createElement("img"),c=document.createElement("nav"),i=document.createElement("a"),a=document.createElement("a"),o=document.createElement("a");d.src="logo.png",d.setAttribute("id","logo"),i.innerHTML="Home",a.innerHTML="Services",o.innerHTML="Contact",i.setAttribute("id","btn-home"),a.setAttribute("id","btn-services"),o.setAttribute("id","btn-contact"),c.setAttribute("id","main-nav"),c.appendChild(i),c.appendChild(a),c.appendChild(o),t.append(d),t.append(c),n.setAttribute("id","container"),e.appendChild(t),e.appendChild(n)})(),e();const d=document.getElementById("btn-home"),c=document.getElementById("btn-services"),i=document.getElementById("btn-contact");d.addEventListener("click",(function(){document.getElementById("container").innerHTML="",e()})),c.addEventListener("click",(function(){document.getElementById("container").innerHTML="",function(){const e=document.getElementById("container"),n=document.createElement("p"),d=document.createElement("table"),c=document.createElement("thead"),i=document.createElement("tbody");n.textContent="Our services will provide assistance for every step in the deathcycle of the deceased from getting the body off the street to reanimating it for extending its usefulness in the living world!";const a=[["Clearing a body from street","5sp"],["Storing a body","2sp/day"],["Burying a body","5sp"],["Animating a body","1gp/day"]];!function(e,t){const n=document.createElement("tr");for(let d=0;d<t.length;d++){const c=document.createElement("th");let i=t[d];c.innerHTML=i,n.appendChild(c),e.appendChild(n)}}(c,["SERVICE","PRICE"]);for(let e=0;e<a.length;e++)t(i,a[e]);d.setAttribute("id","services"),d.appendChild(c),d.appendChild(i),e.appendChild(n),e.appendChild(d)}()})),i.addEventListener("click",(function(){document.getElementById("container").innerHTML="",function(){const e=document.getElementById("container"),t=document.createElement("address"),d=document.createElement("div"),c=n("shump","Shump Livingstone","CEO"),i=n("kargath","Kargath Drakhtul","Vice President"),a=n("caiyra","Caiyra Ararieth","Accountant");t.innerHTML="Trollskull Manor<br>Trollskull Alley<br>North Ward<br>Waterdeep<br>DONT WRITE TO US WE CANT READ",t.setAttribute("id","contact"),d.setAttribute("id","staff"),c.className="contact-details",i.className="contact-details",a.className="contact-details",d.appendChild(c),d.appendChild(i),d.appendChild(a),e.appendChild(t),e.appendChild(d)}()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJob21lSW1hZ2UiLCJjcmVhdGVFbGVtZW50IiwiY29weSIsImNvcHlUZXh0Iiwic3JjIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJhZGRUYWJsZVJvdyIsImJvZHkiLCJ2YWx1ZXMiLCJyb3ciLCJpIiwibGVuZ3RoIiwidGQiLCJ2YWx1ZSIsImNyZWF0ZUNvbnRhY3QiLCJuYW1lIiwiZnVsbG5hbWUiLCJwb3NpdGlvbiIsImRpdiIsImltZyIsImNvbnRhY3QiLCJjb250ZW50IiwiaGVhZGVyIiwibG9nbyIsIm5hdiIsImhvbWUiLCJzZXJ2aWNlcyIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJhIiwic2VydmljZXNUYWJsZSIsInNlcnZpY2VzSGVhZGVyIiwic2VydmljZXNCb2R5IiwidGV4dENvbnRlbnQiLCJ0aCIsImNyZWF0ZVRhYmxlSGVhZGVyIiwic3RhZmYiLCJzaHVtcCIsImthcmdhdGgiLCJjYWl5cmEiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJtQkFrQ0EsTUNmQSxFQW5CQSxXQUNFLE1BQU1BLEVBQVlDLFNBQVNDLGVBQWUsYUFDcENDLEVBQVlGLFNBQVNHLGNBQWMsT0FDbkNDLEVBQU9KLFNBQVNHLGNBQWMsV0FDOUJFLEVBQVdMLFNBQVNHLGNBQWMsS0FFeENELEVBQVVJLElBQU0sWUFDaEJKLEVBQVVLLGFBQWEs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QkosRUFBZ0IsQ0FBQyxVQUFXLFVBRTlDLElBQUssSUFBSXJCLEVBQUksRUFBR0EsRUFBSWdCLEVBQVNmLE9BQVFELElBQ25DSixFQUFZMEIsRUFBY04sRUFBU2hCLElBR3JDb0IsRUFBYzNCLGFBQWEsS0FBTSxZQUNqQzJCLEVBQWN6QixZQUFZMEIsR0FDMUJELEVBQWN6QixZQUFZMkIsR0FDMUJyQyxFQUFVVSxZQUFZd0IsR0FDdEJsQyxFQUFVVSxZQUFZeUIsR0VSdEIsTUFHRixFQUFRRixpQkFBaUIsU0FBUyxXQUNoQ2hDLFNBQVNDLGVBQWUsYUFBYU8sVUFBWSxHRHZCbkQsV0FDRSxNQUFNVCxFQUFZQyxTQUFTQyxlQUFlLGFBQ3BDdUIsRUFBVXhCLFNBQVNHLGNBQWMsV0FDakNxQyxFQUFReEMsU0FBU0csY0FBYyxPQUMvQnNDLEVBQVF2QixFQUFjLFFBQVMsb0JBQXFCLE9BQ3BEd0IsRUFBVXhCLEVBQWMsVUFBVyxtQkFBb0Isa0JBQ3ZEeUIsRUFBU3pCLEVBQWMsU0FBVSxrQkFBbUIsY0FFMURNLEVBQVFoQixVQUFZLG1HQUNwQmdCLEVBQVFqQixhQUFhLEtBQU0sV0FFM0JpQyxFQUFNakMsYUFBYSxLQUFNLFNBQ3pCa0MsRUFBTUcsVUFBWSxrQkFDbEJGLEVBQVFFLFVBQVksa0JBQ3BCRCxFQUFPQyxVQUFZLGtCQUNuQkosRUFBTS9CLFlBQVlnQyxHQUNsQkQsRUFBTS9CLFlBQVlpQyxHQUNsQkYsRUFBTS9CLFlBQVlrQyxHQUVsQjVDLEVBQVVVLFlBQVllLEdBQ3RCekIsRUFBVVUsWUFBWStCLEdDSXRCLE8iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICBjb25zdCBzZXJ2aWNlcz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICBsb2dvLnNyYyA9ICdsb2dvLnBuZydcbiAgbG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKVxuXG4gIGhvbWUuaW5uZXJIVE1MID0gJ0hvbWUnXG4gIHNlcnZpY2VzLmlubmVySFRNTCA9ICdTZXJ2aWNlcydcbiAgY29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCdcbiAgaG9tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0bi1ob21lJylcbiAgc2VydmljZXMuc2V0QXR0cmlidXRlKCdpZCcsICdidG4tc2VydmljZXMnKVxuICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuLWNvbnRhY3QnKVxuXG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4tbmF2JylcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWUpXG4gIG5hdi5hcHBlbmRDaGlsZChzZXJ2aWNlcylcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpXG5cbiAgaGVhZGVyLmFwcGVuZChsb2dvKVxuICBoZWFkZXIuYXBwZW5kKG5hdilcblxuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKVxuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnVcbiIsImZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcbiAgY29uc3QgaG9tZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICBjb25zdCBjb3B5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXG4gIGhvbWVJbWFnZS5zcmMgPSAnYWxsZXkuanBnJ1xuICBob21lSW1hZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdhbGxleScpXG5cbiAgY29weS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvcHknKVxuXG4gIGNvcHlUZXh0LmlubmVySFRNTCA9ICdXZSB0YWtlIGNhcmUgb2YgYWxsIHlvdXIgZGVhZCwgZnJvbSBkcnVua2VuIHRhdmVybiBhY2NpZGVudHMgdG8gb2xkIGFnZS4gT3VyIHRvcCBvZiB0aGUgbGluZSwgQ2hpbGwgVG91Y2ggcG93ZXJlZCBmcmVlemVycyB3aWxsIGtlZXAgeW91ciByZW1haW5zIGluIHRvcC1ub3RjaCBjb25kaXRpb24hIFdlIGFjY29tbW9kYXRlIGFsbCBzaXplcywgZnJvbSBnbm9tZXMgdG8gb2dyZXMuJ1xuXG4gIGNvcHkuYXBwZW5kQ2hpbGQoY29weVRleHQpXG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvcHkpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lSW1hZ2UpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lXG4iLCJmdW5jdGlvbiBsb2FkU2VydmljZXMoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGNvbnN0IHNlcnZpY2VzVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpXG4gIGNvbnN0IHNlcnZpY2VzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKVxuICBjb25zdCBzZXJ2aWNlc0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpXG5cbiAgcGFyYS50ZXh0Q29udGVudCA9ICdPdXIgc2VydmljZXMgd2lsbCBwcm92aWRlIGFzc2lzdGFuY2UgZm9yIGV2ZXJ5IHN0ZXAgaW4gdGhlIGRlYXRoY3ljbGUgb2YgdGhlIGRlY2Vhc2VkIGZyb20gZ2V0dGluZyB0aGUgYm9keSBvZmYgdGhlIHN0cmVldCB0byByZWFuaW1hdGluZyBpdCBmb3IgZXh0ZW5kaW5nIGl0cyB1c2VmdWxuZXNzIGluIHRoZSBsaXZpbmcgd29ybGQhJ1xuXG5cbiAgY29uc3Qgc2VydmljZXMgPSBbXG4gICAgWydDbGVhcmluZyBhIGJvZHkgZnJvbSBzdHJlZXQnLCAnNXNwJ10sXG4gICAgWydTdG9yaW5nIGEgYm9keScsICcyc3AvZGF5J10sXG4gICAgWydCdXJ5aW5nIGEgYm9keScsICc1c3AnXSxcbiAgICBbJ0FuaW1hdGluZyBhIGJvZHknLCAnMWdwL2RheSddXG4gIF1cblxuICBjcmVhdGVUYWJsZUhlYWRlcihzZXJ2aWNlc0hlYWRlciwgWydTRVJWSUNFJywgJ1BSSUNFJ10pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2aWNlcy5sZW5ndGg7IGkrKykge1xuICAgIGFkZFRhYmxlUm93KHNlcnZpY2VzQm9keSwgc2VydmljZXNbaV0pXG4gIH1cblxuICBzZXJ2aWNlc1RhYmxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VydmljZXMnKVxuICBzZXJ2aWNlc1RhYmxlLmFwcGVuZENoaWxkKHNlcnZpY2VzSGVhZGVyKVxuICBzZXJ2aWNlc1RhYmxlLmFwcGVuZENoaWxkKHNlcnZpY2VzQm9keSlcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXJ2aWNlc1RhYmxlKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZUhlYWRlcihoZWFkZXIsIHZhbHVlcykge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpXG4gICAgbGV0IHZhbHVlID0gdmFsdWVzW2ldXG4gICAgdGguaW5uZXJIVE1MID0gdmFsdWVcbiAgICByb3cuYXBwZW5kQ2hpbGQodGgpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJvdylcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUYWJsZVJvdyhib2R5LCB2YWx1ZXMpIHtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICAgIGxldCB2YWx1ZSA9IHZhbHVlc1tpXVxuICAgIHRkLmlubmVySFRNTCA9IHZhbHVlXG4gICAgcm93LmFwcGVuZENoaWxkKHRkKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRTZXJ2aWNlc1xuIiwiZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWRkcmVzcycpXG4gIGNvbnN0IHN0YWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3Qgc2h1bXAgPSBjcmVhdGVDb250YWN0KCdzaHVtcCcsICdTaHVtcCBMaXZpbmdzdG9uZScsICdDRU8nKVxuICBjb25zdCBrYXJnYXRoID0gY3JlYXRlQ29udGFjdCgna2FyZ2F0aCcsICdLYXJnYXRoIERyYWtodHVsJywgJ1ZpY2UgUHJlc2lkZW50JylcbiAgY29uc3QgY2FpeXJhID0gY3JlYXRlQ29udGFjdCgnY2FpeXJhJywgJ0NhaXlyYSBBcmFyaWV0aCcsICdBY2NvdW50YW50JylcblxuICBjb250YWN0LmlubmVySFRNTCA9IFwiVHJvbGxza3VsbCBNYW5vcjxicj5Ucm9sbHNrdWxsIEFsbGV5PGJyPk5vcnRoIFdhcmQ8YnI+V2F0ZXJkZWVwPGJyPkRPTlQgV1JJVEUgVE8gVVMgV0UgQ0FOVCBSRUFEXCJcbiAgY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKVxuXG4gIHN0YWZmLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhZmYnKVxuICBzaHVtcC5jbGFzc05hbWUgPSAnY29udGFjdC1kZXRhaWxzJ1xuICBrYXJnYXRoLmNsYXNzTmFtZSA9ICdjb250YWN0LWRldGFpbHMnXG4gIGNhaXlyYS5jbGFzc05hbWUgPSAnY29udGFjdC1kZXRhaWxzJ1xuICBzdGFmZi5hcHBlbmRDaGlsZChzaHVtcClcbiAgc3RhZmYuYXBwZW5kQ2hpbGQoa2FyZ2F0aClcbiAgc3RhZmYuYXBwZW5kQ2hpbGQoY2FpeXJhKVxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhZmYpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QobmFtZSwgZnVsbG5hbWUsIHBvc2l0aW9uKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhZGRyZXNzJylcblxuICBpbWcuc3JjID0gYCR7bmFtZX0ucG5nYFxuICBjb250YWN0LmlubmVySFRNTCA9IGAke2Z1bGxuYW1lfTxicj4ke3Bvc2l0aW9ufWBcblxuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKVxuICBkaXYuYXBwZW5kQ2hpbGQoY29udGFjdClcblxuICByZXR1cm4gZGl2XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0XG4iLCJpbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51J1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSdcbmltcG9ydCBsb2FkU2VydmljZXMgZnJvbSAnLi9zZXJ2aWNlcydcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnXG5cbmxvYWRNZW51KClcbmxvYWRIb21lKClcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4taG9tZScpXG5jb25zdCBzZXJ2aWNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc2VydmljZXMnKVxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY29udGFjdCcpXG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpLmlubmVySFRNTCA9ICcnXG4gIGxvYWRIb21lKClcbn0pXG5cbnNlcnZpY2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKS5pbm5lckhUTUwgPSAnJ1xuICBsb2FkU2VydmljZXMoKVxufSlcblxuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJykuaW5uZXJIVE1MID0gJydcbiAgbG9hZENvbnRhY3QoKVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=