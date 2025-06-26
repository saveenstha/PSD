from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Entry
from .serializers import EntrySerializer

class EntryViewSet(viewsets.ModelViewSet):
    serializer_class = EntrySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Entry.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
