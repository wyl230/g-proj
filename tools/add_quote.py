l = []
while(True):
  i = input()
  if i == 'q': break
  l.append('\"' + i + '\",')
for i in l:
  print(i)

