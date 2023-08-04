# [unrated] 배열 만들기 1 - 181901 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181901) 

### 성능 요약

메모리: 36.7 MB, 시간: 2.63 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;">정수 <code style="user-select: auto;">n</code>과 <code style="user-select: auto;">k</code>가 주어졌을 때, 1 이상 <code style="user-select: auto;">n</code>이하의 정수 중에서 <code style="user-select: auto;">k</code>의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">1 ≤ <code style="user-select: auto;">n</code> ≤ 1,000,000</li>
<li style="user-select: auto;">1 ≤ <code style="user-select: auto;">k</code> ≤ min(1,000, n)</li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">n</th>
<th style="user-select: auto;">k</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">10</td>
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">[3, 6, 9]</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">15</td>
<td style="user-select: auto;">5</td>
<td style="user-select: auto;">[5, 10, 15]</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;">입출력 예 #1</p>

<ul style="user-select: auto;">
<li style="user-select: auto;">1 이상 10 이하의 3의 배수는 3, 6, 9 이므로 [3, 6, 9]를 return 합니다.</li>
</ul>

<p style="user-select: auto;">입출력 예 #2</p>

<ul style="user-select: auto;">
<li style="user-select: auto;">1 이상 15 이하의 5의 배수는 5, 10, 15 이므로 [5, 10, 15]를 return 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges